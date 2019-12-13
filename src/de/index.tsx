import { createNamespace } from "../utils";


const content = ()=>{
    return <div>demo</div>
}


const [createComponent, bem] = createNamespace('demo');

export default createComponent<any>(content);
