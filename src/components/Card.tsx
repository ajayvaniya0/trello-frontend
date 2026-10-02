import { useDrag } from 'react-dnd'


export function Card(title, description) {
    const [{opacity0}, dragRef] = useDrag(
        () => ({
            type: "card",
            item: {title, description},
            collect: (moniter) => ({
                opacity: moniter.isDragging() ? 0.5 : 1
            })
        })
    )
    return <div ref={dragRef} style={{opacity0, border: "1px solid #b2bec3", borderRadius: 10, padding: 20, margin: 20, cursor: "pointer"}}>
        <div style={{margin: 10}}>
            {title} 
        </div>
        <div style={{height: 1, width: "100%", background: "black"}}></div>
        <div style={{margin: 10}}>
            {description} 
        </div>
    </div>
}