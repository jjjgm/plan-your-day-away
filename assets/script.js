
$(function () {
  var now = dayjs()
  console.log(now);

  //ADD DATE TO ID IN HEADER
  var currentDay = $("#currentDay")
  var currentTime = dayjs().format("dddd  MMMM DD, YYYY  hh:mmA")
  // ADDED CURRENT DAY BEFORE DATE. DATE FORMATED FOR FULL MONTH, 2 DIG DAY, 4 DIG YEAR

  //LOOP FUNCTION FOR CLASS CHANGES FOR PAST PRESENT AND FUTURE GIVEN DAYJS TIME/DATE
  currentDay.text(currentTime)

  var currentHour = dayjs().hour()
  for (let i = 9; i < 18; i++) { //9-18 PICKED SINCE PLANNER IS 9-17
    var parentId = $("#hour-" + i)
    if (i < currentHour) {
      ( //IF TIME IN BLOCK IS LESS THAN CURRENT HOUR WILL SHOW PAST CLASS
        parentId.children("textarea").addClass
          ("past")
      );
    } if (i > currentHour) {
      // IF TIME IN BLOCK IS GREATER THAN CURRENT HOUR WILL DISPLAY FUTURE CLASS
      (parentId.children("textarea").addClass
        ("future")
      );
    }
    if (i == currentHour) {
      // IF TIME IN BLOCK IS PRESENT TIME WILL DISPLAY PRESENT CLASS
      (parentId.children("textarea").addClass
        ("present")
      );
    }
    ;
  }

// SAVES TEXT INPUT INTO LOCAL STORAGE AFTER SAVE BUTTON PRESSED
  $(".saveBtn").on('click', function () {
    var taskHour = $(this).parent().attr('id');
    var tasks = $(this).siblings('textarea').val();
    localStorage.setItem(taskHour, tasks);
  })

// PULLS SAVED TEXT INPUT FROM LOCAL STORAGE AND DISPLAYS IT TIME BLOCK AFTER EACH REFRESH
  $('.time-block').each(function () {
    var savedBlock = $(this).attr('id');
    var savedValue =
      localStorage.getItem(savedBlock);
    if (savedValue !== undefined) {
      $(this).find('textarea').val(savedValue);
    }
  });

});
