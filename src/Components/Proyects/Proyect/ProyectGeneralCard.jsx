import "./Bait.scss"

const ProyectGeneralCard=({video,title,skills,description,images,handleSelect,id})=>{
    const SelectCard=()=>{
        const datas={video,title,skills,description,images,id}
        handleSelect(datas)
    }
    return <div className='card' onClick={SelectCard}>
            <img src={images[0]}/>
            <h1>{title}</h1>
    </div>
}
export default ProyectGeneralCard