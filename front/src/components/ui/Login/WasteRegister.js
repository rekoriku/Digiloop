import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { sendCompRegData } from '../../../utils/sendCompRegData';
import styles from '../../../index.css';

class WasteRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            corpName: '',
            ytunnus: '',
            streetAddress: '',
            zipcode: '',
            city: '',
            contName: '',
            email: '',
            phone: '',
            submitted: false,
            Status: ''
        };
    }

    handleChange(event) {
    }

    Cancel(event) {
        this.props.onNewLogin({
            userlvl: -1
        });
    }

    Submit(event) {
        //TODO: JSON oikeeseen muotoon

        var regData = {
            "username": this.state.email,
            "company": this.state.corpName,
            "ytunnus": this.state.ytunnus,
            "contname": this.state.contName,
            "email": this.state.email,
            "phone": this.state.phone,
            "address": this.state.streetAddress,
            "zipcode": this.state.zipcode,
            "city": this.state.city,
            "userlvl": "1",
            "Status": "0",
        }
        console.log(JSON.stringify(regData));
        sendCompRegData(JSON.stringify(regData));
    }

    render() {

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
                        <tr>
                            <td>  <label className="leftRegisterLabel">Yrityksen nimi*: </label> </td>
                            <td>   <TextField className="rightRegisterField"

                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="esim. Jankon Betoni" style={styles}
                                onChange={(event, newValue) => this.setState({ corpName: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>  <label className="leftRegisterLabel">Y-tunnus*: </label> </td>
                            <td>   <TextField className="rightRegisterField"

                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="Kyl pitäis tietää" style={styles}
                                onChange={(event, newValue) => this.setState({ ytunnus: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Katuosoite*: </label></td>
                            <td>    <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="esim. Ståhlberginkatu 10" style={styles}
                                onChange={(event, newValue) => this.setState({ streetAddress: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Postinumero*: </label></td>
                            <td>   <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="esim. 15110" style={styles}
                                onChange={(event, newValue) => this.setState({ zipcode: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Kaupunki*: </label></td>
                            <td>   <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="esim. Lahti" style={styles}
                                onChange={(event, newValue) => this.setState({ city: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Yhteyshenkilö*: </label> </td>
                            <td>  <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="esim. Matti Meikäläinen" style={styles}
                                onChange={(event, newValue) => this.setState({ contName: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Sähköposti*: </label> </td>
                            <td> <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="esim. etunimi.sukunimi@lamk.fi" style={styles}
                                onChange={(event, newValue) => this.setState({ email: newValue })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="leftRegisterLabel">Puhelinnumero*: </label> </td>
                            <td>   <TextField className="rightRegisterField"
                                underlineStyle={{ borderColor: '#A6CE6B' }}
                                underlineFocusStyle={{ borderColor: '#004225' }}
                                type="text" hintText="esim. 044 708 1347​" style={styles}
                                onChange={(event, newValue) => this.setState({ phone: newValue })} />
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
                    label="Lähetä hakemus"
                    hoverColor="#A6CE6B"
                    style={{ margin: '15px' }}
                    backgroundColor="#004225"
                    labelStyle={{
                        fontFamily: 'kanit',
                        float: 'left',
                        borderRadius: '0',
                        fontSize: '17px',
                        color: '#fff'
                    }}
                    onClick={(event) => this.Submit(event)} />
            </div >

        );
    }
}

export default WasteRegister;