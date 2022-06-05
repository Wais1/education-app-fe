import { useState, useEffect } from "react"
import axios from "axios"
import { config } from "@fortawesome/fontawesome-svg-core"
import { data } from "autoprefixer"

function NodeFlux() {

    const [authToken, setAuthToken] = useState('')
    const [timeStamp, setTimeStamp ] = useState('')
    // const [base64Image, setBase64Image ] = useState('')
    const [authKey, setAuthKey] = useState('')
    const [config, setConfig] = useState({})
    const [jobStatus, setJobStatus] = useState(false)
    const [loading, setLoading] = useState(false)
    const [maskStatus, setMaskStatus] = useState(false)

    // Post req to auth
    // check if cookie exists for token to nodeflux? otherwise do post req? set cookie
    // Has cors error, must fix in prod.
    // maybe need json.stringify
    useEffect(()=> {
        // send a POST request to get auth token
        axios.post('https://cors-anywhere.herokuapp.com/https://backend.cloud.nodeflux.io/auth/signatures', {
            "access_key": "I3EQ8R022FGOKEKLEYS61T5YE",
            "secret_key": "QhfnDPj0E1C2llbhMszWF4iBt0kJpivQF_Fbk80rRmDz2KIQsuvxrL9S0ifNiCRq"
          }).then((response) => {
            console.log(response);
            console.log(response.data.token);
            console.log(response.data.headers['x-nodeflux-timestamp']);
            setAuthToken(response.data.token);
            setTimeStamp(response.data.headers['x-nodeflux-timestamp'])
          }, (error) => {
            console.log(error);
          });;

    },[])

    // Axios post req with config to facemask api
    const checkFaceMask = (base64Image) => {
        // First, convert to base64 string,
        console.log('I3EQ8R022FGOKEKLEYS61T5YE');
        const date = timeStamp.substring(0,8)
        console.log(date);
        console.log('new base64 image');
        console.log(base64Image);
        // might need ot keep the {}
        const authKey =  `NODEFLUX-HMAC-SHA256 Credential=I3EQ8R022FGOKEKLEYS61T5YE/${date}/nodeflux.api.v1beta1.ImageAnalytic/StreamImageAnalytic, SignedHeaders=x-nodeflux-timestamp, Signature=${authToken}`
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authKey,
                'x-nodeflux-timestamp': timeStamp,
              }
        }

        const req = 'data:image/jpeg;base64,' + base64Image
        // POST req to facemask api
        axios.post('https://cors-anywhere.herokuapp.com/https://api.cloud.nodeflux.io/v1/analytics/face-mask', {
            "images": [
                req
            ]
        }, config).then((response) => {
            console.log(response.data);
            setLoading(true)
            checkStatus(response.data.job.id, config)
          }, (error) => {
            console.log(error);
          });;
    }
    
    // Checks status of nodeflux api recursively every 5 seconds until job is complete.
    const checkStatus = (jobId, config) => {
        const polling = setInterval(function(){ 
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.cloud.nodeflux.io/v1/jobs/${jobId}`, config).then((response) => {
                console.log(response.data);
                // If job is successful, terminate and stop loading
                if(response.data.job.result.status == "success") {
                    console.log('Success! STOP the interval');
                    setLoading(false)
                    clearInterval(polling)

                    // Job finished, update state
                    setJobStatus(true)

                    // Mask status (no_mask, or etc)
                    const mask = response.data.job.result.result[0].face_mask[0].status; 
                    console.log(mask);

                    if(mask == 'no_mask'){
                        setMaskStatus(false)
                    } else {
                        setMaskStatus(true)
                    }
                }
            })
        }, 5000);

     // cancel if exists.  
    }


    // Convert file image to base64 string
    const convertToBase64 = (e) => {
        e.preventDefault()
        var file = document.querySelector('input[type=file]')['files'][0];

        var reader = new FileReader();
        console.log("next");
          
        reader.onload = function () {
            var base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            
            // alert(imageBase64Stringsep);
            console.log('STRING not saved');
            console.log(base64String);

            // Try passing n then check face mask
            checkFaceMask(base64String)
        }
        reader.readAsDataURL(file);
    }

  return (
      <div className="h-screen p-10">
        <div className="text-3xl font-bold my-3">Face Mask Detection</div>
        <p className="text-gray-600 my-5">Upload your selfie here. We'll tell you if you have a face mask on, using NodeFlux technology</p>
        { jobStatus && (<p className="my-2 p-5 rounded-lg text-white bg-sky-500"> Result: You have {maskStatus ? `a mask on. Great!` : 'no mask on. Please wear a mask.'}</p>)}
        { loading && (<p className="my-2 p-5 rounded-lg text-white bg-emerald-500">Please wait while your image is being processed... </p>)}
        <form onSubmit={convertToBase64} id="myForm">
            <input type="file" id="inpFile" /> <br></br>
            <button className="p-10 my-5 bg-sky-400 bg text-white font-bold hover:bg-sky-500" type="submit">Upload File</button>
        </form>
      </div>
  )
}
export default NodeFlux