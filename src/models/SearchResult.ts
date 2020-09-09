import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class SearchResult extends Model {
  static table = 'searchResults'

  @( ( field as any )( 'searchTerm' ) )
  searchTerm!: string

  @( ( field as any )( 'section' ) )
  section!: string

  @( ( field as any )( 'ang' ) )
  ang!: number

  @( ( field as any )( 'gurbani' ) )
  gurbani!: string

  @( ( field as any )( 'translation' ) )
  translation!: string

  getSearchResult() {
    return {
      searchTerm: this.searchTerm,
      section: this.section,
      ang: this.ang,
      gurbani: this.gurbani,
      translation: this.translation,
    }
  }
}
