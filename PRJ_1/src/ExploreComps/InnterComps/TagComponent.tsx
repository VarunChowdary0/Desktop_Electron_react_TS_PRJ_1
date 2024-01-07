import React from 'react'

interface CurrrentProps{
    tags : Array<string>;
}

const TagComponent:React.FC<CurrrentProps> = (props) => {
  return (
    <div className=' flex flex-wrap'>
        {props.tags.map((ele)=>
            <span
            className=' hover:cursor-pointer p-1 rounded-md transition-all
            hover:bg-black/10 text-dark_Match_100
            dark:text-dark_Match_300'>#{ele}
          </span>
        )}
						
	</div>
  )
}

export default TagComponent