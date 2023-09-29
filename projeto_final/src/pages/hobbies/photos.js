import { Fundo, PhotosArea, DivText, TextArea } from "./photosStyled"
// import PhotoAlbum from "react-photo-album";
// import pescaria from '../../assets/pescar.png';
// import observar from '../../assets/telescopio.jpg';


// const photos = [
//     {
//         src: '../../assets/pescar.png',
//         width: 800,
//         height: 600
//     },
//     {
//         src: '../../assets/telescopio.jpg',
//         width: 1600,
//         height: 900
//     }
// ];

function Ranking() {
    return(
        <Fundo>
            <PhotosArea>
                FALTA GALERIA
                {/* <PhotoAlbum/> */}
            </PhotosArea>
            <TextArea>
                <DivText>
                    <h2>Ranking</h2>
                    <p>Veja o que andam comentando sobre o top 6 de nossos hobbies</p>
                </DivText>
            </TextArea>
        </Fundo>
    )
}

export default Ranking; 