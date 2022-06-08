const removeFromArray = function (...args)
{
    const arr_ = args[0];
    const newArray = [];

    arr_.forEach(item => {
        if(!args.includes(item))
        {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
