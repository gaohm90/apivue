import 'vant/lib/index.less';

import Vue from 'vue';
import { Button } from 'vant';	
Vue.use(Button);

import * as tool from '@/libs/tool';
Vue.prototype.$api = tool;



