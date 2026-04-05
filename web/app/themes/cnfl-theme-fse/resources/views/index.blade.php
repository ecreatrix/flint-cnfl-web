@extends('layouts.app')

@section('content')
  <wa-page-layout>
    <wa-main>
      @include('partials.page-header')

      @if (! have_posts())
        <wa-alert variant="warning" open>
          {!! __('Sorry, no results were found.', 'wa') !!}
        </wa-alert>

        {!! get_search_form(false) !!}
      @endif

      @while(have_posts()) @php(the_post())
        @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
      @endwhile

      {!! get_the_posts_navigation() !!}
    </wa-main>
  </wa-page-layout>
@endsection

@section('sidebar')
  @include('sections.sidebar')
@endsection
