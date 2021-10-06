import React, { Component } from 'react';
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';


const config = {
    width: "400px",
    height: "500px",
    floating: true,
};


const theme = {
    background: '#f8f9fa',
    fontFamily: 'sans-serif',
    headerBgColor: '#2f9cc7',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#2f9cc7',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};


class SimpleForm extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Chatbot
                    steps={[
                        {
                            id: 'q-firstname',
                            message: 'Merhaba:) İsmin Nedir?',
                            trigger: 'firstname',
                        },
                        {
                            id: 'firstname',
                            user: true,
                            trigger: 'q-lastname'
                        },
                        {
                            id: 'q-lastname',
                            message: 'Soyismin?',
                            trigger: 'lastname',
                        },
                        {
                            id: 'lastname',
                            user: true,
                            trigger: 'q-email'
                        },
                        {
                            id: 'q-email',
                            message: 'Email rica edebilir miyim?',
                            trigger: 'email',
                        },
                        {
                            id: 'email',
                            user: true,
                            trigger: 'q-submit'
                        },
                        


                        



                        {
                            id: 'q-submit',
                            message: 'Bilgilerini kaydedebilir miyim?',
                            trigger: 'submit'
                        },
                        {
                            id: 'submit',
                            options: [
                                { value: 'y', label: 'Evet', trigger: 'end-message' },
                                { value: 'n', label: 'Hayır', trigger: 'no-submit' },
                            ]
                        },
                        {
                            id: 'no-submit',
                            message: 'Bilgilerin kaydedilmedi.',
                            end: true,
                        },
                        {
                            id: 'end-message',
                            component: <Post />,
                            asMessage: true,
                            end: true,
                        },
                    ]}
                    {...config}
                />
            </ThemeProvider>
        );
    }
}

export default SimpleForm;