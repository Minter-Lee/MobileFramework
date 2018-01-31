import less from '../../../../style/common/ui/finCard.less';
import ClassNames from 'classnames';
export default (props) => {
    const { size, circle, title, desc, img } = props;

    return <div className='fin-card-header'>
        <div className={
            ClassNames('fin-card-img',{
                'large': size == 'lg',
                'circle': circle == true
            })
        } >
            <img src={img} className='img'/>
        </div>
        <article className={
            ClassNames('fin-card-article', {
                'large': size == 'lg'
            })
        }>
            <h5 className='fin-card-title'>{title}</h5>
            <p className='fin-card-desc'>{desc}</p>
        </article>
    </div>
}