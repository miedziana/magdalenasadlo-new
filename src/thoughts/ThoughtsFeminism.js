import React from 'react';

import {
  Link,
  HashRouter
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class ThoughtsFeminism extends React.Component {

	render() {
	    return (
	    	<div className="container content-white">
	    	<HashRouter>
	    	<Link to="../thoughts"><Button variant="link"><FontAwesomeIcon icon={faArrowLeft} /> Thoughts</Button></Link>
	    	<div className="offset-1 row">
	    	<h4>Feminism</h4>
	    	<p>
It is a mistake to think that feminism, or push for more participation of women in different walks of life is just about having a woman 
there. It is certainly not about women behaving like men. It is about understanding and representation of female interests.
Let me give an example - if you work in an office and you have family to take care of, it is quite helpful to have a boss or a
 colleague who understands your needs - that you might decide to take longer maternity leave, finish work early to pick up your child from
  school, or stay at home when your baby is sick. It does not have to be a woman, but if it is, it is more likely that she struggles with the 
  same issues. However, if the female boss represents the same point of view that anyone else - whether because of her own belief system or 
  because or cultural appropriation - she will push for the same behaviour. She will not be supportive for your choices and be even more strict 
  with the rules to show her own bosses that she is „one of them” and diserves her place.
</p>
<p>
Feminism is about representation. It is about participation in the decision making when the outcomes of those decisions will impact your life. 
It is about having governments that protect our interest, and it will never be the case if the government consists only of men, often old men (which is 
still the case in many countries). It is about technology that servers our needs and desires, and it cannot be the case if it is designed and 
built mostly by men. People often mistake feminist movement with some kind of push to force women to do exactly what men do - to behave the same way and do 
the same things, but it is precisely the opposite. If our workplaces and governments have a better representation for women (and the same argument is
valid for minorities), then we will not have to immitate men to succeed. The reason why many successful women indeed resemble men in the way technology
talk, think and behave is because they wouldn't be where they are if they did otherwise.
	    	</p>
	    	</div>
            </HashRouter>
            </div>
	    	);
	}
}

export default ThoughtsFeminism;