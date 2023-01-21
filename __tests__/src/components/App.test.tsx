/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { render } from '@testing-library/react-native';
import { Loading } from '../../../src/components/Loading';
import { NotResults } from '../../../src/components/NotResults';
import { SearchInput } from '../../../src/components/SearchInput';
import { FadeInImage } from '../../../src/components/FadeInImage';
import App from '../../../App';

let component:any;


describe('<NotResults />', () => {
    beforeEach(()=>{
        component = render(<NotResults />);
    });
    it("Renderize OK <NotResults />", ()=>{
        console.log(component);
    });
});

// describe('NotResultRender', () => {
//     it("render ok", () => {
//         render(<NotResults/>);
//     });
// });

describe('FadeInImage', () => {
    it("render ok", () => {
        render(<FadeInImage uri='https://archives.bulbagarden.net/media/upload/d/d5/Ability_VIII.png'/>);
    });
});

describe('SearchInput', () => {
    it("render ok", () => {
        render(<SearchInput onDebounce={()=>console.log('testing ok')}/>);
    });
});
