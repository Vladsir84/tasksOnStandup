import React, { useState, useEffect } from 'react';

function User({ match }) {
    const [userData, setUserData] =
        useState({

            avatar_url: "https://avatars1.githubusercontent.com/u/9919?v=4",
            name: "Github",
            location: "San Francisco,CA",
        });

    useEffect(() => {
        console.log('useEffect');
        fetch(`https://api.github.com/users/${match.params.userId}`)
            .then((response) => response.json())
            .then((data) => {
                const { avatar_url, name, location } = data;

                setUserData({
                    avatar_url,
                    name,
                    location,
                });
            });
    }, [match.params.userId]);

    useEffect(() => {
        const onResize = () => {
            console.log('resized');
        }
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize)
        }

    }, []);


    const { avatar_url, name, location } = userData;
    return (
        <div className="user">
            <img
                alt="User Avatar"
                src={avatar_url}
                className="user__avatar"
            />

            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    );
}



// class User extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//             avatar_url: "https://avatars1.githubusercontent.com/u/9919?v=4",
//             name: "Github",
//             location: "San Francisco,CA",
//         };

//     }

//     componentDidMount() {
//         window.addEventListener('resize', this.onResize);
//         this.fetchUser();
//     }


//     componentDidUpdate(prevProps) {
//         if (prevProps.match.params.userId !== this.props.match.params.userId) {
//             this.fetchUser(this.props.match.params.userId);

//         }
//     }

//     componentWillUnmount() {
//         window.removeEventListener('resize', this.onResize);
//     }

//     onResize = () => {
//       console.log('resized');
//     };


//     fetchUser = () => {

//         const { match } = this.props;

//         fetch(`https://api.github.com/users/${match.params.userId}`)
//         .then(response => response.json())
//         .then((data) => {
//             const { avatar_url, name, location } = data;

//             this.setState({
//                 avatar_url,
//                 name,
//                 location,
//             });
//         });
//     }

//     render() {
//         const { avatar_url, name, location } = this.state;
//         return (
//             <div className="user">
//                 <img
//                     alt="User Avatar"
//                     src={avatar_url}
//                     className="user__avatar"
//                 />

//                 <div className="user__info">
//                     <span className="user__name">{name}</span>
//                     <span className="user__location">{location}</span>
//                 </div>
//             </div>
//         )
//     }
// }

export default User;