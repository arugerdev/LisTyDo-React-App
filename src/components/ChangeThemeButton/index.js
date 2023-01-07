/* eslint-disable eqeqeq */
import './ChangeThemeButton.css'

export default function ChangeThemeButton({ theme, SetTheme }) {

    return (
        <div className="changeTheme">
            <button className="changeTheme-button" onClick={SetTheme}>
                {(theme == 'dark') &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 7c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-4-2c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-4 2c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-2 6c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm2 4c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm4 2c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm0-4c-1.656 0-3-1.343-3-3s1.344-3 3-3 3 1.343 3 3-1.344 3-3 3zm4 2c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm2-4c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1z" /></svg>
                }
                {(theme == 'light') &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.685 21.965c3.205-2.154 5.315-5.813 5.315-9.965s-2.11-7.811-5.315-9.965c5.202.353 9.315 4.673 9.315 9.965s-4.113 9.612-9.315 9.965z" /></svg>}
            </button>
        </div>
    )
}