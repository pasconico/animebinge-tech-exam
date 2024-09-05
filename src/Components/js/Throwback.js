import "../css/Throwback.css";
import "../css/Media-Query.css";
import Swal from 'sweetalert2'
import data from '../../Data/throwback-data.json'

function Throwback() {

    const uniqueData = Array.from(
        new Map(data.map(item => [item.animeID, item])).values()
    );

    const swalPopup = () => {
        Swal.fire({
            title: "Coming Soon...",
            text: "Stay tuned!",
            icon: "info"
        });
    }

    return (
        <div className="throwback-anime-container mt-5">
            <p className="throwback-anime-header">Throwback Anime!</p>
            <div className="throwback-anime-content">
                {uniqueData.map(item => (
                    <div className="throwback-anime-item" key={item.animeID}>
                        <div className="throwback-anime-image">
                            <img
                                src={`/images/throwback-anime/throwback-anime-${item.animeThumbnail}.png`}
                                className="throwback-anime-thumbnail" onClick={swalPopup}
                                alt={item.animeName}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Throwback;