import { css } from 'styled-components';

const page404Styles = css`
  color: ${props => (props.paragraph ? '#41addd !important' : 'black')};
`;

export default page404Styles;
