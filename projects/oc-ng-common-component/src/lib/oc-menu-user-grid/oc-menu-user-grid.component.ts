import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserGridActionModel, UserGridOptionTypeModel, UsersGridParametersModel} from 'oc-ng-common-service';
import {UserAccountGridModel} from 'oc-ng-common-service/lib/model/user.model';

@Component({
  selector: 'oc-menu-user-grid',
  templateUrl: './oc-menu-user-grid.component.html',
  styleUrls: ['./oc-menu-user-grid.component.scss']
})
export class OcMenuUserGridComponent implements OnInit {

  @Input() properties: UsersGridParametersModel;
  /**
   * Path to the custom icon for the hidden menu toggle button.
   * Default: empty
   */
  @Input() menuUrl: string = 'assets/img/dots-menu.svg';
  /**
   * Path to the custom icon for the 'sort' button.
   * Default: empty
   */
  @Input() sortIcon: string = '';
  /**
   * Output of menu list item clicked action.
   * Contains an action name, userId, userAccountId
   */
  @Output() menuClicked: EventEmitter<UserGridActionModel> = new EventEmitter<UserGridActionModel>();
  /**
   * Output with page number for new users request
   * Start number = 1
   */
  @Output() pageScrolled: EventEmitter<number> = new EventEmitter<number>();

  public displayChildrenId: string = null;

  private pageNumber: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  action(actionType: UserGridOptionTypeModel, userId: string, userAccountId: string): void {
    const action: UserGridActionModel = {
      action: actionType,
      userId,
      userAccountId
    };
    this.menuClicked.emit(action);
  }

  onScrollDown(): void {
    this.pageNumber++;
    this.pageScrolled.emit(this.pageNumber);
  }

  sortAppsBy(by: 'name' | 'email' | 'date' | 'role' | 'status'): void {
    console.log('sort');
    switch (by) {
      case 'name':
        this.properties.data.list.sort(
          (a, b) => this.compare(true, a.name, b.name));
        break;
      case 'email':
        this.properties.data.list.sort(
          (a, b) => this.compare(true, a.email, b.email));
        break;
      case 'date':
        this.properties.data.list.sort(
          (a, b) => this.compare(false, a.created, b.created));
        break;
      case 'role':
        this.properties.data.list.sort(
          (a, b) => this.compare(true, a?.type, b?.type));
        break;
      case 'status':
        this.properties.data.list.sort(
          (a, b) => this.compare(true, a?.inviteStatus, b?.inviteStatus));
        break;
      default:
        console.error('Unknown sort type : ', by);
    }
  }

  initials(user: UserAccountGridModel): string {
    return user?.name ? user.name.split(' ').map(value => value.substring(0, 1)).join('').substring(0, 2) : '';
  }

  /**
   * @param ascending
   *  true - lowest first (A, B, C)
   *  false - highest sorts first (C, B, A)
   * @param first
   * @param second
   */
  private compare<T extends string | number>(ascending: boolean, first: T, second: T): number {
    if(first === second) {
      return 0;
    } else if(!first) {
      return 1;
    } else if(!second) {
      return -1;
    } else if (ascending) {
      return first < second ? -1 : 1;
    } else {
      return first < second ? 1 : -1;
    }
  }
}
