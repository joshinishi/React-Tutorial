import React from 'react'

function Avatar(props) {
    const avatarStyle = {
        border: props.border || '1px solid green', // If the 'border' prop is not provided, default to '1px solid black'
    };
  return (
    <>
        <div className='container'>
            <img
                className="avatar"
                src="https://i.imgur.com/1bX5QH6.jpg"
                alt="Lin Lanying"
                width={100}
                height={100}
                style={avatarStyle}
            />
            <h5 className='my-1'>{props.ImageTitle}</h5>
        </div>
    </>
  )
}

export default Avatar
