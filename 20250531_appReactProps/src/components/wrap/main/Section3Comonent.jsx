export default function Section3Comonent() {
    return (
        // <section id="section3">
        //     <h2>Section3Comonent</h2>
        // </section>
        <section id="section3">
            <div className="container">
                <button className="notice-btn">공지사항</button><button className="gallery-btn">갤러리</button>
                <div className="notice-box">
                    <ul>
                        <li><a href="!#" className="open-btn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                        <li><a href="!#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                        <li><a href="!#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                        <li><a href="!#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                    </ul>
                </div>
                
                <div className="gallery-box">
                    <ul>
                        <li><a href="!#" title="gallery1"><img src="./images/gallery1.jpg" alt="gallery1"/></a></li>
                        <li><a href="!#" title="gallery2"><img src="./images/gallery2.jpg" alt="gallery2"/></a></li>
                        <li><a href="!#" title="gallery3"><img src="./images/gallery3.jpg" alt="gallery3"/></a></li>
                    </ul>
                </div>


            
            </div>
        </section>
    )
}