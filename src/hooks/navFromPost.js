import { useEffect, useContext } from 'react';
import { navigate } from 'gatsby';
import LayoutContext from '../context/layoutContext';
// const navOutFromPost = (dependencies = []) => {
//     const [isPost, setIsPost] = useState(false);

//     useEffect(() => {
//         setIsPost(true);
//     }, dependencies);

//     return [isPost, setIsPost];
// };

const navOutFromPost = (dependencies = []) => {
    const isPostMethods = useContext(LayoutContext);
    const { isPost, setIsPost } = isPostMethods;

    useEffect(() => {
        if (isPost) {
            setIsPost(false);
            setTimeout(() => {
                navigate('/');
            }, 150);
        }
    }, dependencies);

    return [isPost, setIsPost];
};

export default navOutFromPost;
