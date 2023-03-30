import { defineStore } from 'pinia';

export const usePostStore = defineStore('postStore', {
	state: () => {
		return { 
      content: '',
      tempFilePaths: [],
      tempFiles: []
    };
	},
  
	actions: {
	},
});