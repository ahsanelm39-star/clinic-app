import "./ScoundPageHead.css"

export default function ScoundPageHead ({word}) {
    return (
        <>
            <div className="scound-page-head">
                <img src="/images/footer-+.png" alt="" />
                <img src="/images/footer-liner.png" alt="" />
                <img src="/images/footer-sicral.png" alt="" />
                <span className="text-7xl max-sm:text-6xl font-bold">{word}</span>
            </div>
        </>
    )
}