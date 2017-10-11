
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

function eastWestConverter(horizontal) {
  if (horizontal === '1st Avenue') {
    return 1;
  } else if (horizontal === '2nd Avenue') {
    return 2;
  } else if (horizontal === '3rd Avenue') {
    return 3;
  } else if (horizontal === 'Lexington Avenue') {
    return 4;
  } else if (horizontal === 'Park') {
    return 5;
  } else if (horizontal === 'Madison Avenue') {
    return 6;
  } else if (horizontal === '5th Avenue') {
    return 7;  }
  }

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf() {
    return ((new Date()).getFullYear() - this.startDate.getFullYear() - 1);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(beginningLocation, endingLocation) {
    var hor = Math.abs(eastWestConverter(this.beginningLocation.horizontal) - eastWestConverter(this.endingLocation.horizontal))
    var vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return hor + vert
  }
  estimatedTime(peak = false) {
    let x = this.blocksTravelled(this.beginningLocation, this.endingLocation)
    if (peak === false) {
      return Math.ceil(x/3)
    } else {
      return Math.ceil(x/2)
    }
  }
}
