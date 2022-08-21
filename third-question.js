/*Create, open, and read from a text file: Text content of an app that won the Best Campus Cup in 2021, its developer, category, and institution represented. */

const fs = require('fs');

function create_file(file_name, content)
{
    fs.writeFile(file_name, content, function(err)
    {
      if(err)
      {
          return console.log(err)
      }
      return console.log(content)
    ;
    })
  }

  create_file("textfile.txt","The app that won the category for Best Campus Cup Solution is Uniwise. The developer is Tebogo Serogole who is from Tswane University of Technology")

function read_file(file_name)
  {
    fs.readFile(file_name, 'utf8', function(err,data)
    {
      if(err)
      {
          return console.log(err)
      }
      return console.log(data)
    ;
    })
  }

  read_file("textfile.txt")