import st from './style.module.css';

const LayoutBlock=({title="This is defult title", descr="This is defult description", urlBg, colorBg='yellow'})=>{

const layoutBg = { backgroundImage: urlBg && `url("${urlBg}")`, backgroundColor: colorBg };
    return(
        <section className={st.root} style={layoutBg}>
            <div className={st.wrapper}>
                <article>
                    <div className={st.title}>
                        {title}
                        <span className={st.separator}></span>
                    </div>
                    <div className={`${st.desc}, ${st.full}`}>
                        <p>
                            {descr}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};
export default LayoutBlock;