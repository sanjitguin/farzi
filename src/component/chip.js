import React from 'react'
import '../style/chip.css'



const Chip = (prop) => {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getInitials(name) {
        let initials = (name.match(/[a-zA-Z]/) || []).pop();
        
        // let initials;
        // const nameSplit = name.split(" ");
        // const nameLength = nameSplit.length;
        // if (nameLength > 1) {
        //     initials =
        //         nameSplit[0].substring(0, 1) +
        //         nameSplit[nameLength - 1].substring(0, 1);
        // } else if (nameLength === 1) {
        //     initials = nameSplit[0].substring(0, 1);
        // } else return;

        return initials.toUpperCase();
    };

    function createImageFromInitials(size, name, color) {
        if (name == null) return;
        name=getInitials(name)
    
        const canvas=document.createElement('canvas')
        const context=canvas.getContext('2d')
        canvas.width=canvas.height=size
    
        context.fillStyle="#ffffff"
        context.fillRect(0,0,size,size)
    
        context.fillStyle=`${color}50`
        context.fillRect(0,0,size,size)
    
        context.fillStyle=color;
        context.textBaseline='middle'
        context.textAlign='center'
        context.font =`${size/2}px Roboto`
        context.fillText(name,(size/2),(size/2))
    
        return canvas.toDataURL()
    };

    return (
        <div className="chip">
            {prop.leftIcon &&  
            
                <img id='preview' src={
					prop.leftIcon.length < 2
						? createImageFromInitials(500, prop.text, getRandomColor())
						: prop.leftIcon
                    }
				    alt='profile-pic'
                    className={`leftIcon ${prop.leftIcon.class}`}
			    />
            }
            
            {prop.text}
            <span className="closebtn" onClick={() => this.parentElement.style.display='none'}>
            
                {prop.rightIcon && <img src={prop.rightIcon} alt="Person" className={`rightIcon ${prop.rightIcon.class}`}  /> }
            </span>

            
        </div>




    )
}

export default Chip