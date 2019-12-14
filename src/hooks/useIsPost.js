import { useEffect, useState } from 'react';

const useIsPost = (dependencies = []) => {
    const [isPost, setIsPost] = useState(false);

    useEffect(() => {
        if (isPost) {
            setIsPost(false);
        }
    }, dependencies);

    return [isPost, setIsPost];
};

export default useIsPost;
