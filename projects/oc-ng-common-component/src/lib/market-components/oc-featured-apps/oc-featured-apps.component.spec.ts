import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OcFeaturedAppsComponent} from './oc-featured-apps.component';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FullAppData, StatElement } from 'oc-ng-common-service';
import { By } from '@angular/platform-browser';

@Component({
  template: ''
})
export class MockRoutingComponent {
}

const statElement: StatElement = {
  '90day': 20,
  '30day': 10,
  total: 30
};

const featuredApp: FullAppData = {
  appId: '34343-jojo-s353-fg3423',
  icon: 'assets/oc-ng-common-component/get-started.svg',
  logo: 'assets/oc-ng-common-component/get-started.svg',
  name: 'Test App',
  model: [{
    type: 'recurring',
    price: 5,
    trial: 1,
    license: 'single',
    modelId: '23235hfg4',
    currency: 'EUR',
    billingPeriod: 'monthly'
  }],
  rating: 4.2,
  reviewCount: 20,
  summary: '',
  description: 'With this plugin you can collaborate with teammates at any time.',
  lastUpdated: new Date(),
  version: 1.1,
  safeName: ['test-app'],
  developerId: '44555-3232gvdfdf',
  submittedDate: new Date(),
  created: new Date().getMonth() - 2,
  status: {
    value: 'approved',
    lastUpdated: 1.1,
    modifiedBy: '',
    reason: ''
  },
  statistics: {
    views: statElement,
    downloads: statElement,
    developerSales: statElement,
    totalSales: statElement,
    ownerships: statElement,
    reviews: statElement
  },
  isLive: true
};

describe('OcFeaturedAppsComponent', () => {
  let component: OcFeaturedAppsComponent;
  let fixture: ComponentFixture<OcFeaturedAppsComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OcFeaturedAppsComponent, MockRoutingComponent],
      imports: [RouterTestingModule.withRoutes([
        {path: 'mock-router/:id', component: MockRoutingComponent}
      ])]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcFeaturedAppsComponent);
    component = fixture.componentInstance;

    component.label = 'Featured Apps';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show apps data', () => {
    component.data = [featuredApp, featuredApp];

    fixture.detectChanges();

    const label: HTMLHeadingElement = fixture.debugElement.query(By.css('h4')).nativeElement;
    const appName: HTMLHeadingElement = fixture.debugElement.query(By.css('h5')).nativeElement;
    const appDescription: HTMLSpanElement = fixture.debugElement.query(By.css('span')).nativeElement;
    const appImage: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;

    expect(label.textContent).toContain('Featured Apps');
    expect(appName.textContent).toContain('Test App');
    expect(appDescription.textContent).toContain('With this plugin you can collaborate with teammates at any time.');
    expect(appImage).toBeTruthy();
    expect(appImage.src).toContain('assets/oc-ng-common-component/get-started.svg');
  });

  it('should show no data message', () => {
    component.emptyDataMessage = 'No Featured Apps';

    fixture.detectChanges();

    const noAppsHeading: HTMLHeadingElement = fixture.debugElement.query(By.css('h5')).nativeElement;

    expect(noAppsHeading.textContent).toContain('No Featured Apps');
  });

});