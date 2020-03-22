module.exports = function check(str,bracketsConfig)
{
    newArr = str.split('');
    for (var i = 0; i < newArr.length; i++)
    {
        for (var k = 0; k < bracketsConfig.length; k++)
        {
            if (bracketsConfig[k][0] == newArr[i] && bracketsConfig[k][1] == newArr[i + 1])
            {
                newArr.splice(i,2);
                i--;
                k = -1;
            }
        }
    }
    if (newArr.length == 0)
    {
        return true;
    } else
    {
        return false;
    }
}
