import CvJuanCamiloSaizFullStack from '../../assets/CvJuanCamiloSaizFullStack.pdf'
const CvPdf = () => {
    return <div className="abaut">
        <object data={CvJuanCamiloSaizFullStack} type="application/pdf" width="100%" height="100%" >
            <p>Tu navegador no soporta la visualización de archivos PDF. Haz clic <a href={CvJuanCamiloSaizFullStack}>aquí</a> para descargar el archivo.</p>
        </object>
   </div>
}
export default CvPdf