import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: any[], ...args: string[]) {
    let result: any = [];
    console.log("Users from Pipe: " + JSON.stringify(users));
    console.log("args from Pipe: " + JSON.stringify(args));
    if (users == null || users.length == 0)
      return result;
    if (args == null || args.length == 0 || args[0] == null || args[0] == undefined)
      return users;
    let search: string = args[0];
    result = users.filter(u => u.name?.toLowerCase().includes(search?.toLowerCase()));
    console.log("Pipe result: " + result);
    return result;
  }

}
