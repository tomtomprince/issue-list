import angular from 'angular';

import 'normalize.css';
import './index.scss';

import {IssuesModule} from './app/issues.module';

angular
  .module('app', [
    IssuesModule
  ]);
