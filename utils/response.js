function postResponse(posts){
    let newPostResponse = [];

    posts.forEach(post => {
        newPostResponse.push({
            postID: post._id,
            username : post.username,
            typeofcustomer : post.typeofcustomer,
            city : post.city,
            securitymoney : post.securitymoney,
            waterbill : post.waterbill,
            electricitybill : post.electricitybill,
            pincode : post.pincode,
            fulladdress : post.fulladdress,
            createdAt : post.createdAt,
            updatedAt : post.updatedAt
        })
    });
    return newPostResponse;
}

function postResponseById (post) {
    return {
            postID: post._id,
            username : post.username,
            typeofcustomer : post.typeofcustomer,
            city : post.city,
            securitymoney : post.securitymoney,
            waterbill : post.waterbill,
            electricitybill : post.electricitybill,
            pincode : post.pincode,
            fulladdress : post.fulladdress,
            createdAt : post.createdAt,
            updatedAt : post.updatedAt
    }
}

module.exports = { 
    postResponse ,  
    postResponseById  
}