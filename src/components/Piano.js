
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23 } from './PianoSvg';

const paths = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23]

const Piano = () => {
    return (
        <div className='piano-div'>
            <svg width="1387" height="467" viewBox="0 0 1387 467" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-s">
                {paths} 
            </svg>
        </div>
    )
}

export default Piano;
