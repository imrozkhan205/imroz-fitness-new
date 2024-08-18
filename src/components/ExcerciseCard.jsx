import React,{useState}  from 'react'
import Workout from './Workout'
import Stopwatch from './Stopwatch'
import SignIn from './SignIn'
export default function ExcerciseCard(props) {

    const {excercise, i} = props
    const[setsCompleted, setSetsCompleted] = useState(0)
    function handleSetIncrement(){
      setSetsCompleted((setsCompleted + 1)%6)
    }
  return (
    <div className='p-4 rounded-lg flex flex-col gap-4 bg-slate-950 sm:flex-wrap ml-10 mr-10'>
      
      <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gapx-x-4 ml-10 '>
        <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
            0{i+1}

        </h4>
        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center' >{excercise.name.replaceAll("_"," ")} </h2>
        <p className='text-sm text-slate-400 capitalize'>{excercise.type} </p>
      </div>
      <div className='flex flex-col'>
        <h3 className='text-slate-400 text-sm' >Muscle Groups</h3>
        <p className='capitalize' >{excercise.muscles.join('&')}  </p>

      </div>

      <div className='flex flex-col bg-slate-950 gap-2' >
        {excercise.description.split('___').map((val)=>{
          return(
            <div className='text-sm'>
              {val}
              </div>
          )
        })}

      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
        {['reps', 'rest', 'tempi'].map(info=>{
            return (
                <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full' >
                    <h3 className='capitalize text-slate-400 tex-sm' >{info==='reps' ? `${excercise.unit}`:info} </h3>
                    <p className='font-medium' >{excercise[info]}</p>

                </div>
            )
        })}

      </div>
      <button onClick={handleSetIncrement} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-blue-900 hover:border-blue-600 w-full duration-200'>
        <h3 className='text-slate-400 text-sm capitalize' >Sets Completed</h3>
        <p className='font-medium' >{setsCompleted}/5 </p>
      </button>
      
      <div className="mt-4">
        <Stopwatch />
        
      </div>
      {setsCompleted===0&&
      (
        <div className= 'text-white text-center'>
          <p>What's stopping you? </p>
          </div>
        
        )}

      {setsCompleted===1&&
      (
        <div className= 'text-red-500 text-center'>
          <p>Lets go mate you got this </p>
          </div>
        
        )}
        {setsCompleted===2&&
      (
        <div className= 'text-yellow-500 text-center'>
          <p>Almost Half way </p>
          </div>
        )}
        {setsCompleted===3&&
      (
        <div className= 'text-blue-500 text-center'>
          <p>You did more than Half of the work</p>
          </div>
        
        )}
        {setsCompleted===4&&
      (
        <div className= 'text-green-200 text-center'>
          <p>Almost done </p>
          </div>
        
        )}

      {setsCompleted===5&&
      (
        <div className= 'text-green-400 text-center'>
          <p>Congratulations you completed this set </p>
          <i class="fa-solid fa-check"></i>
          </div>
        
        )}


    </div>
  )
}