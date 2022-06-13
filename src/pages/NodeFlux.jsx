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
    const [errMessage, setErrMessage] = useState('')

    // Post req to auth
    // check if cookie exists for token to nodeflux? otherwise do post req? set cookie
    // Has cors error, must fix in prod.
    // maybe need json.stringify

    const ENDPOINT = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : `http://${window.location.hostname}:5000`
    console.log('Endpoint:');
    console.log(ENDPOINT);

    useEffect(()=> {
        // send a POST request to get auth token
        //
        //   /nodefluxauth
        axios.post(ENDPOINT + '/nodefluxauth').then((response) => {
            console.log('something happened :D');
            console.log(response);
            console.log(response.data.token);
            console.log(response.data.headers['x-nodeflux-timestamp']);
            setAuthToken(response.data.token);
            setTimeStamp(response.data.headers['x-nodeflux-timestamp'])
          }, (error) => {
              console.log('bad thing happened!!');
              setErrMessage('There was an error uploading, please ensure the image is less than 50kb in size.')
          });;
          console.log('right after post');
    },[])

    // Axios post req with config to facemask api
    const checkFaceMask = (base64Image) => {
        // First, convert to base64 string,
        const date = timeStamp.substring(0,8)
        console.log(date);
        console.log('new base64 image');
        console.log(base64Image);
        //timestamp n date n authtoken is empty?
        const authKey =  `NODEFLUX-HMAC-SHA256 Credential=I3EQ8R022FGOKEKLEYS61T5YE/${date}/nodeflux.api.v1beta1.ImageAnalytic/StreamImageAnalytic, SignedHeaders=x-nodeflux-timestamp, Signature=${authToken}`
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authKey,
                'x-nodeflux-timestamp': timeStamp,
              }
        }
        //l aunch heroku app first, then replace links , n return json

        const req = 'data:image/jpeg;base64,' + base64Image
        // POST req to facemask api
        // supposed to be done by backend, since its not a broser
        axios.post(ENDPOINT + '/nodefluxfacemask', {
            "images": [
                req
            ],
            "config": config
        }).then((response) => {
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
            axios.post(ENDPOINT + '/nodefluxcheckjob', {
                "jobId": jobId,
                "config": config
            }).then((response) => {
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
          
        reader.onload = function () {
            var base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            console.log(base64String);
            // Try passing n then check face mask
            checkFaceMask(base64String)
        }
        reader.readAsDataURL(file);
    }

  return (
      <div className="h-screen p-10">
        <div className="text-3xl font-bold my-3">Face Mask Detection</div>
        <p className="text-gray-600 my-5">Upload your selfie here. We'll tell you if you have a face mask on, using NodeFlux technology. Please ensure that the image uploaded is less than 50kb in size, or compress it manually.</p>
        <p className="text-red-600 my-5">{errMessage}</p>
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