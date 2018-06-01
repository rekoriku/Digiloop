import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { sendCompRegData } from '../../../utils/sendCompRegData';
import { Checkbox } from 'material-ui';

class WasteRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            corpName: '',
            ytunnus: '',
            streetAddress: '',
            zipcode: '',
            city: '',
            email: '',
            phone: '',

            termsAndConditions: false,
            allFilled: false,
            emailValid: false,
            submitted: false
        };
        this.checkFill = this.checkFill.bind(this);
        this.emailCheck = this.emailCheck.bind(this);
    }

    componentDidUpdate() {
        this.emailCheck();
        this.checkFill();
    }

    updateCheckConfirm() {
        this.setState((oldState) => {
            return {
                termsAndConditions: !oldState.termsAndConditions,
            };
        });
    }

    Cancel(event) {
        this.props.onNewLogin({
            userlvl: -1
        });
    }

    emailCheck() {
        let email = this.state.email;
        let pass;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        pass = re.test(String(email).toLowerCase());

        if (this.state.emailValid !== pass) {
            this.setState({ emailValid: pass })
        }

    }

    checkFill() {
        let pass = true;
        for (var key in this.state) {
            if (this.state[key] === '') {
                pass = false;
            }
        }
        if (pass && !this.state.allFilled && this.state.emailValid) {
            this.setState({ allFilled: true })
        } else if ((!pass || !this.state.emailValid) && this.state.allFilled) {
            this.setState({ termsAndConditions: false, allFilled: false })
        }
    }

    Submit(event) {

        var regData = {
            "email": this.state.email,
            "password": "dangerous",
            "company": this.state.corpName,
            "ytunnus": this.state.ytunnus,
            "fname": this.state.fname,
            "lname": this.state.lname,
            "phone": this.state.phone,
            "address": this.state.streetAddress,
            "zipcode": this.state.zipcode,
            "city": this.state.city
        }
        console.log(JSON.stringify(regData));
        sendCompRegData(JSON.stringify(regData));
    }

    render() {

        const registerInactive = {
            borderRadius: '0',
            textAlign: 'center',
            backgroundColor: "grey",
            //border: '2px solid #004225',
            margin: '15px'

        };

        const registerActive = {
            borderRadius: '0',
            textAlign: 'center',
            backgroundColor: "#004225",
            border: '0px solid #004225',
            margin: '15px'


        };

        const styles = {
            /*
            width: 250, backgroundColor: '#FFFFFF', borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#d6d7da'
            */
            borderRadius: '0',
            backgroundColor: 'white',
            border: '2px solid #004225'
        };

        return (
            <div className="registerWrapper">

                <AppBar style={{ backgroundColor: '#FFF' }}
                    title={<div className="app-bar-title">Rekisteröityminen</div>}
                    showMenuIconButton={false}
                />


                <table className="registerStructure">
                    <tbody>
                        <tr><td></td><td><label className="middleRegisterLabel">Yrityksen tiedot:</label> </td></tr>
                        <tr>
                            <td>  <label className="leftRegisterLabel">Yrityksen nimi*: </label> </td>
                            <td>   <TextField className="rightRegisterField"

                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="Jankon Betoni Oy" style={styles}
                                onChange={(event, newValue) => this.setState({ corpName: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>  <label className="leftRegisterLabel">Y-tunnus*: </label> </td>
                            <td>   <TextField className="rightRegisterField"

                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="1234567-8" style={styles}
                                onChange={(event, newValue) => this.setState({ ytunnus: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Katuosoite*: </label></td>
                            <td>    <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="Ståhlberginkatu 10" style={styles}
                                onChange={(event, newValue) => this.setState({ streetAddress: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Postinumero*: </label></td>
                            <td>   <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="15110" style={styles}
                                onChange={(event, newValue) => this.setState({ zipcode: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Kaupunki*: </label></td>
                            <td>   <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="Lahti" style={styles}
                                onChange={(event, newValue) => this.setState({ city: newValue })} />
                            </td>
                        </tr>
                        <tr><td></td><td><label className="middleRegisterLabel">Yhteyshenkilön tiedot:</label> </td></tr>
                        <tr>
                            <td><label className="leftRegisterLabel">Etunimi*: </label> </td>
                            <td>  <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="Matti" style={styles}
                                onChange={(event, newValue) => this.setState({ fname: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Sukunimi*: </label> </td>
                            <td>  <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="Meikäläinen" style={styles}
                                onChange={(event, newValue) => this.setState({ lname: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Sähköposti*: </label> </td>
                            <td> <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="etunimi.sukunimi@lamk.fi" style={styles}
                                onChange={(event, newValue) => this.setState({ email: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Puhelinnumero*: </label> </td>
                            <td>   <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="044 708 1347​" style={styles}
                                onChange={(event, newValue) => this.setState({ phone: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                <Checkbox style={{ width: '70%', fontWeight: 400 }}
                                    labelStyle={{
                                        fontFamily: 'kanit',
                                        float: 'left',
                                        borderRadius: '0',
                                        fontSize: '12px',
                                        color: '#004225'
                                    }}
                                    id="confirmationCheck"
                                    iconStyle={{ fill: '#004225' }}
                                    checked={this.state.termsAndConditions}
                                    onCheck={this.updateCheckConfirm.bind(this)}
                                    label="Vakuutan edellä antamani tiedot oikeiksi, ja hyväksyn palvelun käyttöehdot."
                                    disabled={!this.state.allFilled}
                                />

                            </td>
                        </tr>
                    </tbody>
                </table>
                <FlatButton className="cancelButton"
                    label="Peruuta"
                    hoverColor="#004225"
                    style={{ margin: '15px' }}
                    backgroundColor="#004225"
                    labelStyle={{
                        fontFamily: 'kanit',
                        float: 'left',
                        borderRadius: '0',
                        fontSize: '17px',
                        color: '#FFFFFF'
                    }}
                    onClick={(event) => this.Cancel(event)} />
                <FlatButton className="registerButton"
                    label="Rekisteröidy"
                    labelStyle={{
                        fontFamily: 'kanit',
                        float: 'left',
                        borderRadius: '0',
                        fontSize: '17px',
                        color: '#FFFFFF'
                    }}
                    disabled={!this.state.termsAndConditions}

                    style={this.state.termsAndConditions ? registerActive : registerInactive}

                    onClick={(event) => this.Submit(event)} />
            </div >

        );
    }
}

export default WasteRegister;
