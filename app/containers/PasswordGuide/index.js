/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ReactSVG from 'react-svg';
import passwordIcon from 'images/password.svg';
import passwordCheck from 'images/check.svg';
import developerPic from 'images/developer.jpg';
import messages from './messages';
import { Wrapper, Main, Header, HeaderTxt, HeaderHlpTxt, PasswordHelperBlock, PasswordIcon, PasswordHelper, HelperItem, PasswordCheck, PasswordInput, PasswordSubmitButton, Footer, Author } from './styles';

class PasswordGuide extends React.PureComponent {   // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      characterLimitExists: false,
      specialCharacterExists: false,
      upperCaseExists: false,
      numberExists: false,
    };
    this.handleChangeEvents = this.handleChangeEvents.bind(this);
  }

  handleChangeEvents(password) {
    const regexUppercase = /^(?=.*[A-Z]).+$/; // Uppercase character pattern
    const regexSpecialCharacter = /^(?=.*[_\W]).+$/; // Special character
    const regexNumber = /^(?=.*[0-9]).+$/; // Number pattern
    if (password.length >= 8) {
      this.setState({ characterLimitExists: true });
    } else {
      this.setState({ characterLimitExists: false });
    }
    if (regexUppercase.test(password)) {
      this.setState({ upperCaseExists: true });
    } else {
      this.setState({ upperCaseExists: false });
    }
    if (regexSpecialCharacter.test(password)) {
      this.setState({ specialCharacterExists: true });
    } else {
      this.setState({ specialCharacterExists: false });
    }
    if (regexNumber.test(password)) {
      this.setState({ numberExists: true });
    } else {
      this.setState({ numberExists: false });
    }
  }

  render() {
    const { characterLimitExists, specialCharacterExists, upperCaseExists, numberExists } = this.state;
    return (
      <Wrapper>
        <Author>
          <div className="media">
            <img alt="author" src={developerPic} />
          </div>
          <div className="mediaBody">
            <h4>Password Guide</h4>
            <p><span>by</span><a href="https://www.linkedin.com/in/prasanth-kumar-lalapeta-369a42a9">Prasanth Kumar Lalapeta</a></p>
          </div>
        </Author>
        <Main>
          <Header>
            <HeaderTxt>
              <FormattedMessage {...messages.header} />
            </HeaderTxt>
          </Header>
          <PasswordHelperBlock>
            <PasswordIcon>
              <ReactSVG path={passwordIcon} />
            </PasswordIcon>
            <HeaderHlpTxt>
              <FormattedMessage {...messages.headerHlpTxt} />
            </HeaderHlpTxt>
            <PasswordHelper>
              <HelperItem className={characterLimitExists ? 'accepted' : ''} >
                <FormattedMessage {...messages.passwordHelper1} />
              </HelperItem>
              <HelperItem className={specialCharacterExists ? 'accepted' : ''} >
                <FormattedMessage {...messages.passwordHelper2} />
              </HelperItem>
              <HelperItem className={upperCaseExists ? 'accepted' : ''} >
                <FormattedMessage {...messages.passwordHelper3} />
              </HelperItem>
              <HelperItem className={numberExists ? 'accepted' : ''} >
                <FormattedMessage {...messages.passwordHelper4} />
              </HelperItem>
            </PasswordHelper>
            {(characterLimitExists && specialCharacterExists && upperCaseExists && numberExists) &&
              <PasswordCheck>
                <ReactSVG path={passwordCheck} />
              </PasswordCheck>
            }
          </PasswordHelperBlock>
          <PasswordInput
            placeholder="Set a Password"
            type="password"
            onChange={(e) => this.handleChangeEvents(e.target.value)}
          />
          <PasswordSubmitButton className={(characterLimitExists && specialCharacterExists && upperCaseExists && numberExists) ? '' : 'disabled'}>
            <FormattedMessage {...messages.passwordSave} />
          </PasswordSubmitButton>
        </Main>
        <Footer>
          <FormattedMessage {...messages.passwordPicCredit} />
          <FormattedMessage {...messages.passwordCheckCredit} />
          <FormattedMessage {...messages.designCredit} />
        </Footer>
      </Wrapper>
    );
  }
}

PasswordGuide.defaultProps = {
};

PasswordGuide.propTypes = {
};

export default PasswordGuide;
