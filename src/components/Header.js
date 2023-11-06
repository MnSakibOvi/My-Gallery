import App from '../App';



function Header({ selectedImagesCount, onDeleteSelectedImages }) {
    return (
        <header className=''>

            <h1 >My Gallery</h1>
            <div className="he">
                <div className="selected-count">{selectedImagesCount} image(s) selected</div>
                <button className="delete-button" onClick={onDeleteSelectedImages}>
                    Delete
                </button>
            </div>

        </header>
    );
}

export default Header;
