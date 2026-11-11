import './intro.css';


export default function Intro() {

    const documentDownload = () => {
        const link = document.createElement('a');
        link.href='/Documents/jannisBResume.pdf';
        link.download = 'jannisBResume.pdf';
        link.click();
    };
    return(
        <div className="portfolio-intro-wrapper">
            <h1>Welcome I am a Developer for web applications</h1>
            <button onClick={documentDownload}>Download Resume</button>
        </div>
    )
}