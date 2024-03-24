import deveImage from './assets/deve.jpg'; 
import cuceImage from './assets/cuce.jpg'; 


function DeveCuce({deger,click}){    
    return(    
        <div className={`deveCuce ${click===true ? 'active' : click===false ? 'passive' : ''}`}>
        {deger === "Cüce" ? (
            <img src={cuceImage} alt="Cüce" />
        ) : deger === "Deve" ?(
            <img src={deveImage} alt="Deve"/>
        ) : (
            <p>Oyun Başlıyor...</p>
        )}
        </div>
    )
}

export default DeveCuce;