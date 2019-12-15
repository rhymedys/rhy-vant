
import { createNamespace } from "../utils";
import { CreateElement } from "vue/types/vue";
import { RenderContext } from "vue/types/options";
import { DefaultSlots } from "src/utils/types";


export interface ITitleConfig {
    size?: 'large' | 'middle' | 'small'
    weight?: 'normal' | 'bold'
    txt?: string
}

export interface IDescConfig {
    size?: 'large' | 'middle' | 'small'
    weight?: 'normal' | 'bold'
    txt?: string

}


export interface IMoreConfig {
    txtAlign?: 'left' | 'middle' | 'right'
    visiable?: boolean
    txt?: string
    link?: string
    event?: string
}

export interface IISessionTitleProps {
    background?: string
    title?: ITitleConfig,
    desc?: IDescConfig
    more?: IMoreConfig
}


const [createComponent, bem] = createNamespace('test-component');


function TestComponent(
    h: CreateElement,
    props: IISessionTitleProps,
    slots: DefaultSlots,
    ctx: RenderContext<IISessionTitleProps>
) {

    const{
        title,
        desc
    } = props

    const isHadTitle = title && title.txt
    const isHadDesc = desc && desc.txt


    if(!isHadTitle && !isHadDesc){
        return
    }





    return <div class={bem()}>session-title</div>
}





TestComponent.props = {
    txtAlign: [String],
    background: [String],
    title: [Object],
    desc: [Object],
    more: [Object]
};


export default createComponent<IISessionTitleProps>(TestComponent);
