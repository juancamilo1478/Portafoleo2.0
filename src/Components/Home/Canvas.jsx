import React, { useEffect, useRef, useState } from 'react';
import "./canvas.css";

const CanvasComponent = ({ handleEyes, handleActive }) => {
    const canvasRef = useRef(null);
    const [selectedColor, setSelectedColor] = useState('#000000');

    const selectedColorRef = useRef(selectedColor);

    useEffect(() => {
        selectedColorRef.current = selectedColor;
    }, [selectedColor]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        const handleMouseDown = (event) => {
            isDrawing = true;
            lastX = event.offsetX;
            lastY = event.offsetY;
        };

        const handleMouseMove = (event) => {
            if (!isDrawing) return;
            ctx.strokeStyle = selectedColorRef.current;
            ctx.lineWidth = 15;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            lastX = event.offsetX;
            lastY = event.offsetY;
        };

        const handleMouseUp = () => {
            isDrawing = false;
        };

        const handleMouseLeave = () => {
            isDrawing = false;
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleSaveImage = () => {
        const canvas = canvasRef.current;
        handleEyes(canvas.toDataURL());
        handleActive()
    };

    const saveColor = (event) => {
        const newColor = event.target.value;
        setSelectedColor(newColor);
        
    };
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    return (
        <div className='canvascontainer'>
            <div className='canvasMake'>
                <input type="color" id="colorPicker" onInput={saveColor} value={selectedColor} />
                <button onClick={handleSaveImage} >save</button>
                <button onClick={clearCanvas}>clear</button> 
                <button className='close' onClick={() => handleActive()}>X</button>
            </div> 
           
            <canvas ref={canvasRef} width="200" height="200" className='table' ></canvas>
          
        </div>
    );
};

export default CanvasComponent;
