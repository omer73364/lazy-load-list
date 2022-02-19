import '../lib/index.css'
export default ({color}) => (
    <div className="dots">
        <div style={{backgroundColor: color}}></div>
        <div style={{backgroundColor: color}}></div>
        <div style={{backgroundColor: color}}></div>
    </div>
)