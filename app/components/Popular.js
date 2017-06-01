import React from 'react';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: 'All',
            userList: 'All'
        };
        this.changeSelectedLang = this.changeSelectedLang.bind(this);
    }

    changeSelectedLang(lang) {
        this.setState(function(){
            return {
                selectedLang: lang,
                userList: lang
            }
        });
    }

    render() {
        const languages = ['All', 'PHP', 'JavaScript', 'Python', 'Java', 'C'];

        return (
            <div>
                <ul className="lang">
                    {
                        languages.map(function (lang) {
                            return (
                                <li key={lang}
                                    className={ this.state.selectedLang === lang ? 'lang-active' : ''}
                                    onClick={ this.changeSelectedLang.bind(null, lang) }
                                >
                                    { lang }
                                </li>
                            );
                        }, this)
                    }
                </ul>
                <p>{ this.state.userList }</p>
            </div>
        )
    }
}

export default Popular;