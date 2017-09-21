const { PI } = Math;

function area(r){
    return PI * r * r;
}
module.exports = area;

exports.circumference = (r) => 2 * PI * r;