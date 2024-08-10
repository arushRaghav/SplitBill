export default function Button(pr){
    return <button className="button" onClick={pr.onClick}>{pr.children}</button>
}