import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" />
                        <div>
                            <strong>Name Teacher</strong>
                            <span>Matéria</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rerum temporibus odio! Beatae animi quo,
                        sit obcaecati cumque amet dolores commodi sint ipsam magnam error praesentium labore blanditiis fugiat quae!
                        <br /><br />
                        Etiam mattis nibh at orci euismod suscipit. Quisque et arcu sit amet tellus molestie fringilla. 
                        Pellentesque sagittis venenatis placerat. Sed mattis nisl sit amet lorem interdum mattis. 
                        Mauris ac mauris dictum, convallis lorem ac, sagittis libero. Donec eu tortor turpis. 
                        Cras sagittis nunc non mi efficitur ultricies. Donec aliquam sapien eget metus placerat elementum.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;