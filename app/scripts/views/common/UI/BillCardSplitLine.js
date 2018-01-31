import less from '../../../../style/common/ui/billCardSplitLine.less';

export default (props) => {
    const radiusBackgroundColor = props.radiusBackgroundColor || '#f5f5f9',
          style = {
              backgroundColor: radiusBackgroundColor
          };
    return <section className='bill-card-split-line'>
        <div className='card-radius left' style={style}></div>
        <div className='dashed-border'></div>
        <div className='card-radius right' style={style}></div>
    </section>
}